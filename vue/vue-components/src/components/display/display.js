const code = `<template>
                <div>
                    <input v-model="message">
                    {{ message }}
                </div>
                </template>
                <script>
                export default {
                    data () {
                        return {
                            message: ''
                        }
                    }
                }
                </script>`


export default code;
const $chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
function str32(len = 32) {
    let maxPos = $chars.length
    let str = ''
    for(let i = 0; i< len; i++){
        str += $chars.charAt(Math.floor(Math.random()*maxPos))
    }
}

