import axios from 'axios';

const fetcher = () => ({
    get: (url:string) => {
      try {
        return axios.get(url, {
          method: 'GET',
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNDQwMTA0NmMxYmJkNDM3NzFlODQ0YmU4YzQxNGFjYiIsInN1YiI6IjVmOTgzODJmZTE4Yjk3MDAzNGQwMzM1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UXcm8LSGmfBILHmAZwdHac3aMU2_7Avb2t_D94CZxQQ`,
            'Content-Type': `application/json;charset=utf-8`
          },
        });
      } catch (err) {
        throw Error(err);
      }
    }});

export default fetcher;