# Currency conversions using CNB API

React(TS) web application focused on providing a information and simple conversions between currencies based on Czech National Bank rates. 

## Tech Stack
The frontend is using these tools:
- ReactJS(TS) 18.2,
- Reactstrap,
- Axios.

## Run application
```bash
git clone https://github.com/KlosStepan/cnb-react-interview
npm install
npm start
```

## Aplication overview
- Proxying API call https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt - not accessible on frontend due to CORS restrictions. We have to tunnel request via proxy (cors-proxy.stkl.cz) and add header `Access-Control-Allow-Origin: *` on our backend to the rewrapped reponse.
- In useEffect() do proxied call, proceed with parsing and preparations.
- TS type **Currency**.

## Production notes
Dockerfile
```Dockerfile
FROM node as build
WORKDIR /app
COPY package.json .
RUN npm install --legacy-peer-deps
COPY . .
ARG REACT_APP_NAME
ENV REACT_APP_NAME=$REACT_APP_NAME
RUN npm run build

FROM nginxinc/nginx-unprivileged
COPY --chown=nginx:nginx --from=build /app/build /usr/share/nginx/html
```
Run to build and push image
```zsh
docker build -t stepanklos/cnb-react-interview .
docker push stepanklos/cnb-react-interview
```
- Kubernetes Service+Deployment - TODO
