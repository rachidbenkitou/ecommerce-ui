FROM nginx:1.19.0-alpine
COPY /dist /usr/share/nginx/html


# npm run build

# docker build -t registry.gitlab.com/wim-tech/wimsaas/console-app-ui:prod .

# docker push registry.gitlab.com/wim-tech/wimsaas/console-app-ui:prod
