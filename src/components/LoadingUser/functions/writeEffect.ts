export const writeEffect = (elementT: Element | null) => {
    if (elementT === null) return;

    const elementText = elementT;
    const text = elementText.innerHTML.split("");
    elementText.innerHTML = "";

    setTimeout(() => {
        text.forEach((value, index) => {
            setTimeout(() => {
                elementText.innerHTML += value;
            }, 400 * index);
        });
    }, 400);
};
