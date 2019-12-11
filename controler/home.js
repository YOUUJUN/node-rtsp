const router = require('koa-router')();
const git = require("./../utils/git_function/git_tools");
const workspaces = require("./../utils/workspace_manager/workspace");

const fsPromises = require('fs').promises;

const util = require("util");
const execFile = util.promisify(require("child_process").execFile);

const streamAPI = require("node-rtsp-stream");

const stream = new streamAPI({
    name: 'name',
    streamUrl: 'rtsp://admin:admin123@192.168.3.38:554/MPGE-1/ch34/main/av_stream',
    wsPort: 9999,
    ffmpegOptions: { // options ffmpeg flags
        '-stats': '', // an option with no neccessary value uses a blank string
        '-r': 30 // options with required values specify the value after the key
    }
});


module.exports = {
    index : async (ctx,next) =>{

        await ctx.render("index.html");
    },

    getFile : async (ctx,next) => {
        console.log("ctx",ctx);
        ctx.body = {msg:"msg"};
    }
};