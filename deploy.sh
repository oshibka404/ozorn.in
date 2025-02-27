source ./.env.local
rsync --progress -e "ssh -p $SERVER_SSH_PORT" --recursive ./dist/ $SERVER_LOGIN@$SERVER_IP:$SERVER_PATH
