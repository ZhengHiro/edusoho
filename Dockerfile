FROM zjs12311/edusoho-env:latest
ADD ./ /code

EXPOSE 80

ENTRYPOINT ["bash","/code/deployment_config/init.sh"]