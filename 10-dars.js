let logic = {
    and: function (arg1, arg2) {

        let a = Boolean(arg1)
        let b = Boolean(arg2)

        if (a == 1) {
            if (b == 1) {
                return true
            } else {
                return false
            }
        } else {
            return false
        }
    },

    or: function (arg1, arg2) {

        let a = Boolean(arg1)
        let b = Boolean(arg2)

        if (a == 0) {
            if (b == 0) {
                return false
            } else {
                return true
            }
        } else {
            return true
        }
    },

    not: function (boolen) {

        let bool = Boolean(boolen)

        if (bool == true) {
            return false
        } else {
            return true
        }

    }
}


console.log(logic.and(1, 1))
console.log(logic.or(0, 0))
console.log(logic.not(0))