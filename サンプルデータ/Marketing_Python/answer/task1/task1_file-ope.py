import os

path = './task1/data'
tmp = os.listdir(path)
files = []
for filename in tmp:
    p = path + '/' + filename
    if os.path.isfile(p):
        files.append(filename)
print(files[:10])

for filename in files:
    ext = filename.split('.')[-1]
    p = path + '/' + ext
    if not os.path.exists(p):
        os.mkdir(p)

import shutil

for filename in files:
    from_path = path + '/' + filename
    ext = filename.split('.')[-1]
    to_path = path + '/' + ext
    shutil.move(from_path, to_path)