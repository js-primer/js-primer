/**
 * `delay * 1.5`ミリ秒以内にタイマーが呼ばれたら成功、呼ばれなかったら失敗とする関数
 * @param {Function} callback 
 * @param {number} delay タイマーのコールバックを呼び出すまでの時間（ミリ秒）
 */
const exactSetTimeout = (callback, delay) => {
    return new Promise((resolve, reject) => {
        // タイマーのコールバックが呼ばれるまでの許容時間（ミリ秒）
        // `delay`に指定された時間の1.5倍まで許容する
        const limitOfDelay = delay * 1.5;
        const startTime = Date.now();
        setTimeout(() => {
            const diffTime = Date.now() - startTime;
            if (diffTime <= limitOfDelay) {
                return resolve();
            } else {
                return reject(new Error(`許容時間内にタイマーが呼ばれませんでした${diffTime}ミリ秒）`));
            }
        }, delay);
    });
};

exactSetTimeout((error, message) => {
    if (error) {
        console.error(error);
        return;
    }
    console.log(message);
}, 10);


