# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹，这里是默认的路径，可以自定义
cd .vuepress/dist

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
#git push -f git@github.com:Plain-ww/Wblog.git master:blogs
git push -f https://github.com/Plain-ww/Blogs.git master

cd -

# 最后发布的时候执行 bash deploy.sh