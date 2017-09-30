from node:6

env http_proxy ${http_proxy}
run npm config set proxy ${http_proxy}
run npm config set https-proxy ${http_proxy}
run npm install -g serverless
ENTRYPOINT cd /sls && /bin/bash
