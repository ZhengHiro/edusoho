# 加密
# npx locker en ./public_key.pem redis_origin.yml redis.yml pwd
# npx locker en ./public_key.pem parameters_origin.yml parameters.yml database_password.secret

cd /code/deployment_config

env=prod
echo "环境变量：${env}";

# parameters.yml
# eval "npx locker de ./private_key.pem ./${env}/parameters.yml ../app/config/parameters.yml database_password.secret"

# redis.yml
# eval "npx locker de ./private_key.pem ./${env}/redis.yml ../app/config/redis.yml pwd"


items=(
"nginx.conf" "/etc/nginx/"
)

len=${#items[@]}
for((i=0;i<len;i+=2));do
    fileName=${items[i]}
    src="./$env/$fileName"
    destDir=${items[i+1]}
    echo "copy $src to $destDir$fileName"

    if [ ! -d "$destDir" ]; then
      mkdir -p "$destDir"
    fi
    cp "$src" "$destDir$fileName"
done

nginx && php-fpm -R --nodaemonize