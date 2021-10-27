Docker build:
    docker build -t expressKubeImage .
    docker run --name expressKube -p 3000:3000 expressKubeImage

DB:
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
npx sequelize-cli db:migrate
npx sequelize-cli seed:generate --name sudo-user
npx sequelize-cli db:seed:all