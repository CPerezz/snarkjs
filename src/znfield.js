

class ZnField {
    constructor(n) {
        this.n = n;
    }

    add(a, b) {
        const maxGrade = Math.max(a.length, b.length);
        const res = new Array(maxGrade);
        for (let i=0; i<maxGrade; i++) {
            res[i] = this.F.add(a[i], b[i]);
        }
        return this._reduce(res);
    }

    sub(a, b) {
        // TODO
        throw new Error("Not Implementted");
    }

    neg(a) {
        // TODO
        throw new Error("Not Implementted");
    }

    mul(a, b) {
        // TODO
        throw new Error("Not Implementted");
    }

    inverse(a, b) {
        // TODO
        throw new Error("Not Implementted");
    }

    div(a, b) {
        // TODO
        throw new Error("Not Implementted");
    }

    isZero(a) {
        // TODO
        throw new Error("Not Implementted");
    }

    random() {
        // TODO
        throw new Error("Not Implementted");
    }

}

module.exports = ZnField;
