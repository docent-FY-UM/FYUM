from django.shortcuts import render, HttpResponse
from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .recomed import rec,check
from .models import Recommend,Member,Masterpiece,Wishlist
import jwt
import random





@api_view(['POST'])
def get_recom_paintings(request):
    ids = request.data.get('choosed',False)  
    id_list = ids
   
    res = []
    for i in id_list:
        
        for j in rec(i+1):
            res.append([j,check(j)]) 
    
    
    auth_header = request.META.get('HTTP_AUTHORIZATION')
    memid = 6;
    if auth_header:
        jwt_token = auth_header.split()[1]
        print(jwt_token)
        privatekey = "picaso"
        decode = jwt.decode(jwt_token, options={"verify_signature": False})
        memid = decode["id"]
        pass
    else:
        print('no')
        pass
    
    member = Member.objects.get(kakao_id=memid)
    
    painting1 = Masterpiece.objects.get(id=res[0][0])
    painting2 = Masterpiece.objects.get(id=res[1][0])
    painting3 = Masterpiece.objects.get(id=res[2][0])
    painting4 = Masterpiece.objects.get(id=res[3][0])
    painting5 = Masterpiece.objects.get(id=res[4][0])
    painting6 = Masterpiece.objects.get(id=res[5][0])
    painting7 = Masterpiece.objects.get(id=res[6][0])
    painting8 = Masterpiece.objects.get(id=res[7][0])
    painting9 = Masterpiece.objects.get(id=res[8][0])
    painting10 = Masterpiece.objects.get(id=res[9][0])
    
    recommend = Recommend(member = member,
                          painting1 = painting1,
                          painting2 = painting2,
                          painting3 = painting3,
                          painting4 = painting4,
                          painting5 = painting5,
                          painting6 = painting6,
                          painting7 = painting7,
                          painting8 = painting8,
                          painting9 = painting9,
                          painting10 = painting10,
                          )
    recommend.save()
    
    
    return Response(status=status.HTTP_200_OK)

@api_view(['GET'])
def CF_recommed(request):
    
    auth_header = request.META.get('HTTP_AUTHORIZATION')
    memid = 6;
    if auth_header:
        jwt_token = auth_header.split()[1]
        print(jwt_token)
        privatekey = "picaso"
        decode = jwt.decode(jwt_token, options={"verify_signature": False})
        memid = decode["id"]
        pass
    else:
        print('no')
        pass
    
    member = Member.objects.get(kakao_id=memid)

    
    rows = Member.objects.count()
    Qset = Member.objects.all()
    Qlist = list(Qset)
    memberidlist = [i.pk for i in Qlist]
    
    value = [[] for i in range(rows)] 
    
    for i in range(rows):
        
        te = Wishlist.objects.filter(member_id = Qlist[i].pk)
        tlist = list(te)
        for j in tlist:
            value[i].append(j.painting.pk)
        
   
    arr = [[0 for j in range(rows)] for i in range(rows)]
    

    for i in range(rows):
        for j in range(rows):
            if(value[i] == [] or value[j] == [] or i == j):
                arr[i][j] = 0
            else:
                arr[i][j] = jaccard_sim(value[i],value[j])
    
 
    
    theidx = memberidlist.index(member.pk) 

    
   
    scores = list(enumerate(arr[theidx]))

    scores = sorted(scores, key=lambda x: x[1], reverse=True)
    scores = scores[0:10]
    recomend = [idx[0] for idx in scores]

    
    rcomlist = []
    for i in recomend:
        set1 = set(value[i])
        set2 = set(value[theidx])
        setF = set1.difference(set2)
        
        rcomlist.extend(list(setF))
    
    rcomlist = list(set(rcomlist))    
    
    
   
    if(len(rcomlist) < 10):
        recommend = Recommend.objects.get(member_id = member.pk)
        rcomlist.append(recommend.painting1.pk)
        rcomlist.append(recommend.painting2.pk)
        rcomlist.append(recommend.painting3.pk)
        rcomlist.append(recommend.painting4.pk)
        rcomlist.append(recommend.painting5.pk)
        rcomlist.append(recommend.painting6.pk)
        rcomlist.append(recommend.painting7.pk)
        rcomlist.append(recommend.painting8.pk)
        rcomlist.append(recommend.painting9.pk)
        rcomlist.append(recommend.painting10.pk)
     
    rcomlist = list(set(rcomlist)) 
    
    
    random.shuffle(rcomlist)
    
    rcomlist = rcomlist[0:10] 
    

    
    painting1 = Masterpiece.objects.get(id=rcomlist[0])
    painting2 = Masterpiece.objects.get(id=rcomlist[1])
    painting3 = Masterpiece.objects.get(id=rcomlist[2])
    painting4 = Masterpiece.objects.get(id=rcomlist[3])
    painting5 = Masterpiece.objects.get(id=rcomlist[4])
    painting6 = Masterpiece.objects.get(id=rcomlist[5])
    painting7 = Masterpiece.objects.get(id=rcomlist[6])
    painting8 = Masterpiece.objects.get(id=rcomlist[7])
    painting9 = Masterpiece.objects.get(id=rcomlist[8])
    painting10 = Masterpiece.objects.get(id=rcomlist[9])
    
    newRecommend = Recommend(member = member,
                          painting1 = painting1,
                          painting2 = painting2,
                          painting3 = painting3,
                          painting4 = painting4,
                          painting5 = painting5,
                          painting6 = painting6,
                          painting7 = painting7,
                          painting8 = painting8,
                          painting9 = painting9,
                          painting10 = painting10,
                          )
    newRecommend.save()
    
    
    
    return Response(status=status.HTTP_200_OK)


def jaccard_sim(list1, list2):
    s1 = set(list1)
    s2 = set(list2)
    return float(len(s1.intersection(s2))/len(s1.union(s2)))