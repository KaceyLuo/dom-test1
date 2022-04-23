window.dom = {
    find(selector, scope) {
        return (scope || document).querySelectorAll(selector);
    },
    style(node, name, value) {
        if (arguments.length === 3) {
            //dom.style(div,'color','red') 想要修改
            node.style[name] = value;
        } else if (arguments.length === 2) {
            if (typeof name === 'string') {
                //dom.style(aiv,'color') 想要读取
                return node.style[name];
            } else if (name instanceof object) {
                //dom.style(div,{color:'red'})
                for (let key in name) {
                    //key:border/color
                    //如果key是一个变量的话需要将key用[]括起来,否则key就会变成字符串
                    node.style[key] = name[key];
                }
            }
        }
    },
    each(nodeList, fn) {
        for (let i = 0; i < nodeList.length; i++) {
            fn.call(null, nodeList[i]);
        }
    }
}