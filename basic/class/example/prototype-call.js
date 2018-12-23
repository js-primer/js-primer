class MyClass {
    method() {
        console.log("プロトタイプオブジェクト");
    }
}

// インスタンス を クラス から作る
const myInstance = new MyClass();

// 再帰表現
function call(object, methodName) {
    if (object.hasOwnProperty(methodName)) {
        return object[methodName]();
    }
    const prototypeObject = Object.getPrototypeOf(object);
    if (!prototypeObject) {
        return;
    }
    return call(prototypeObject, methodName);
}

call(myInstance, "method");
