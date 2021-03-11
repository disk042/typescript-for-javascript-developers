import axios from 'axios';

export {};

let url =
  'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123';

axios.get(url).then(function (response) {
    interface Article {
      id: number;
      title: string;
      description: string;
    }
    let data: Article[]; //object[]の中でも正確な制約をもった型とする。
    data = response.data;
    console.log(data);
});
