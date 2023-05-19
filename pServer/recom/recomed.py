import csv
import math
import time

import pandas
import pyarrow as pa
import pyarrow.parquet as pq
import pyarrow.csv as pc

from numpy import genfromtxt
from recomProject import settings

start = time.time()
csv_path = f"{settings.BASE_DIR}/recom/source/testCut.csv"
py_table = pc.read_csv(csv_path,read_options = pc.ReadOptions(skip_rows=None)) #, parse_options = pc.ParseOptions(delimiter=',')

data = py_table
end = time.time()
print(type(data))
print(data.shape)


def rec(idx, vect=data):
    
    sim_scores = list(enumerate(vect[idx].to_pylist()))
    print(sim_scores[125])
    print(sim_scores[188])
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)
    sim_scores = sim_scores[0:5]
    recomend = [idx[0]+1 for idx in sim_scores]
    
    print(sim_scores)
    print(recomend)
    return recomend  

print(f"{end - start:.5f} sec")

csv_path2 =f"{settings.BASE_DIR}/recom/source/painting_info_fin.csv"
f = open(csv_path2,'rt', encoding='UTF8')
rdr = csv.reader(f)
docs = []
for line in rdr:
    docs.append(line[1]) 
f.close()

def check(print_id):
    return docs[print_id]