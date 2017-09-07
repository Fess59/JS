export function Execute(action) {
    var result;
    var start = new Date().getTime();
    try {
        result = action();
    } catch (e) {
        var finishEx = new Date().getTime();
        ConsoleWrite(this.Namespace + "-" + this.constructor.name, e.stack + " " + e, finishEx - start);
    } finally {
        var finish = new Date().getTime();
        //ConsoleWrite(this.Namespace + "-" + this.constructor.name, "", finish - start);
    }
    return result;
}


export function ConsoleWrite(methodName, comment, ticks) {
    var str = `[${ticks} мс] ${methodName}: ${comment}`;
    Log(str);
}

function Log(props) {
    var str = `[${DateTimeNow()}] ${props}`;
    console.log(str);
}
function DateTimeNow() {
    var d = new Date();
    return d.getDay() + "." + d.getMonth() + "." + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + "." + d.getMilliseconds()
}




