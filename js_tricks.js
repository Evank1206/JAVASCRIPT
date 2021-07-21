/* html list -g convert to array usign slice() */
input_clear();
function input_clear() {
    // 1-class or id or tag nereer ni html-s songood
    var clearfiled = document.querySelectorAll('.add__description' + "," + '.add__value');
    // 2-convert it into array
    var newArray_input = Array.prototype.slice.call(clearfiled);

    // for(var i =0; i<newArray_input.length; i++){
    //     newArray_input[0] = "";
    // }
    // same as for loop
    newArray_input.forEach(function (el) {
        // 3-to give empty to the arrays each element
        el.value = "";
    });
    // after enter the data users crusor focus on first input
    newArray_input[0].focus()

};
/* DOM -ruu hereglegchiin input -d oruulsan data -g gargah using replace() */
addList_items();
function addList_items(type, items) {
    var dom, list;
    if (type === "inc") {
        list = '.income_list';
        dom = '<div class="item clearfix" id="income-$$ID$$"><div class="item__description">$$DESCRIPTION$$</div><div class="right clearfix"><div class="item__value">$$VALUE$$</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'

    } else {
        list = '.expense_list';
        dom = '<div class="item clearfix" id="expense-$$ID$$"><div class="item__description">$$DESCRIPTION$$</div><div class="right clearfix"><div class="item__value">$$VALUE$$</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
    }
    dom = dom.replace("$$ID$$", items.id);
    dom = dom.replace("$$DESCRIPTION$$", items.description);
    dom = dom.replace("$$VALUE$$", items.value);

    document.querySelector(list).insertAdjacentHTML("beforeend", dom);
};

/* array dotor-s hamgiin suulchiin element-g olood, unique id-g ni avh */
var items, id;
if (all_User_Data.data['inc'].length === 0) {
    id = 1;
} else {
    // got lastest item from array and add new item after it then put their id's in id
    id = all_User_Data.data['exp'][all_User_Data.data[type].length - 1].id + 1;
};