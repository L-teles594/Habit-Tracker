const form = document.querySelector("#form-habits");
const nlwSetup = new NLWSetup(form);

const data = {
    run: ['01-01', '01-02', , '01-03', '01-04', '01-05'],
    water: ['01-01', '01-02'],
    workout: ['01-01', '01-02'],
    sleep: ['01-01', '01-02'],
    dogWalk: ['01-01', '01-02'],
    eatWell: ['01-01', '01-02']
}

nlwSetup.setData(data)
nlwSetup.load()