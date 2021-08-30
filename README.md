docker build -t expressKubeImage .
docker run --name expressKube -p 3000:3000 expressKubeImage

NGINX_CONFIG:

server {
    listen 80;
    listen [::]:80;

    root /home/khan/deployments/$host;
    server_name $host;

    index index.html;
    location / {
            try_files $uri $uri/ = 404;
    }
}
