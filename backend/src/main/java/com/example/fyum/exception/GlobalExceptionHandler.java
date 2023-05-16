package com.example.fyum.exception;

import java.io.IOException;
import javax.servlet.http.HttpServletRequest;
import lombok.Builder;
import lombok.Data;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(NullPointerException.class)
    private ResponseEntity<Object> nullPointerExceptionHandler(Exception e,
        HttpServletRequest request) {
        Object response = new ErrorResponse("정보를 찾을 수 없습니다.", request, "Not Found", 400);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @ExceptionHandler(IOException.class)
    private ResponseEntity<Object> ioExceptionHandler(Exception e, HttpServletRequest request) {
        Object response = new ErrorResponse("입출력 중 오류가 발생했습니다.", request, "IO Exception", 400);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @ExceptionHandler(RuntimeException.class)
    private ResponseEntity<Object> baseExceptionHandler(Exception e, HttpServletRequest request) {
        Object response = new ErrorResponse("유효하지 않은 요청입니다.", request, "Bad Request", 400);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }


    @Data
    private static class ErrorResponse {

        final String path;
        final String error;
        final String message;
        final int status;

        @Builder
        public ErrorResponse(String message, HttpServletRequest request, String error,
            int httpStatus) {
            this.status = httpStatus;
            this.error = error;
            this.message = message;
            this.path = request.getServletPath();
        }
    }
}
