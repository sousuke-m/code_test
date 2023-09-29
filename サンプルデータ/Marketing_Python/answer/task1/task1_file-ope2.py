import os
import shutil

path = './task1/data'
files = os.listdir(path)

for filename in files:
    from_path = path + '/' + filename
    if os.path.isfile(from_path):
        ext = filename.split('.')[-1]
        to_path = path + '/' + ext
        if not os.path.exists(to_path):
            os.mkdir(to_path)
        shutil.move(from_path, to_path)