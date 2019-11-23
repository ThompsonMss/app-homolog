// 23-10-2019 -> 2019-10-23
export function invertingDate(date) {
    let dt = date.split('-');
    return `${dt[2]}-${dt[1]}-${dt[0]}`
}