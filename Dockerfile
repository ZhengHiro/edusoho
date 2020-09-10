FROM zjs12311/edusoho-env:latest
ADD ./ /code

RUN apk add bash

EXPOSE 80

ENTRYPOINT ["bash","/code/deployment_config/init.sh"]