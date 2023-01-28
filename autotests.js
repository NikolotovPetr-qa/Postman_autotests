pm.test("Статус ответа - 200", function () {
    pm.response.to.have.status(200);
});
pm.test("В хэдерах ответа есть дата", function () {
    pm.response.to.have.header("Date");
});
pm.test("Время отклика меньше 700 милисекунд", function () {
    pm.expect(pm.response.responseTime).to.be.below(700);
});
pm.test("Статус ОК", function () {
    pm.response.to.have.status("OK");
});
pm.test("В боди есть строка - Obi-Wan Kenobi", function () {
    pm.expect(pm.response.text()).to.include("Obi-Wan Kenobi");
});
