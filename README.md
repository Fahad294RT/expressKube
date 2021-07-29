docker build -t expressKubeImage .
docker run --name expressKube -p 3000:3000 expressKubeImage