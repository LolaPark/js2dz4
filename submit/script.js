function checkElement(elementID,elRegExp) {
    let res = true;
    let item=document.getElementById(elementID);
    res=elRegExp.test(item.value);
    if (item.classList.contains('redFrame') && res) {
        item.classList.remove('redFrame');
    }
    if (!item.classList.contains('redFrame') && !res) {
        item.classList.add('redFrame');
    }
    return res;
}
function checkData() {
    let nameRegExp=/^([a-zа-яё]+)$/igm;
    let phoneRegExp=/\+7\(\d{3}\)\d{3}-\d{4}$/igm;
    let emailRegExp=/^([a-z]+)([.-]?)([a-z]+)@([a-z]+)([.]+)([a-z]+)$/igm;
    let msgRegExp=/[a-zа-яё0-9_]+/igm;

    let res1=checkElement("fldName",nameRegExp);
    let res2=checkElement("fldPhone",phoneRegExp);
    let res3=checkElement("fldEmail",emailRegExp);
    let res4=checkElement("fldMsg",msgRegExp);

    if (res1 && res2 && res3 && res4) {
            alert('Отличная работа!')
        }
}
