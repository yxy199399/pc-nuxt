<template>
  <div class="books-container">
    <h1>{{title}}</h1>
    <table>
      <thead>
        <tr>
          <th>姓名</th>
          <th>年龄</th>
          <th>班级</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, idx) in userList" :key="idx">
          <td>{{user.name}}</td>
          <td>{{user.age}}</td>
          <td>{{user.class}}</td>
          <td>
            <button>编辑</button>
            <button>删除</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  layout: 'books',
  async asyncData(context) {
    const {data} = await axios.get(process.env.baseUrl + '/user')
    return {userList: data, title:"asyncData请求数据"}
  },
}
</script>

<style lang="scss" scoped>
.books-container {
  max-width: 960px;
  margin: 0 auto;
  h1 {
    margin-bottom: 20px;
  }
  table {
    width: 500px;
    td {
      text-align: center;
      padding: 5px 0;
    }
  }
}
</style>