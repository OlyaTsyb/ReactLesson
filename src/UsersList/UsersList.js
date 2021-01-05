 import React, {Component} from "react";
 import UserComponent from "../User/UserComponent";
 import  UserStyle from "../User/UserStyle.css";

 let usersWithAddress = [
                {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
                {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
                {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
                {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
                {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
                {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
                {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
                {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
                {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
                {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
                {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
            ];

 class UsersList extends Component{

    render(){
        return(
            <div>
                {
                //отсортировать во возрасту
               //usersWithAddress.sort((a, b) => a.age - b.age).map((user, index) =>{
               //отсортировать во возрасту( обратном порядке)
               //usersWithAddress.sort((a, b) => b.age - a.age).map((user, index) =>{
               //отсортировать его по имени пользователей
                //usersWithAddress.sort((a,b) => a.name < b.name?-1:1).map((user, index) =>{
                // отсортировать его по имени пользователей в обратном порядке
                //usersWithAddress.sort((a,b) => a.name > b.name?-1:1).map((user, index) =>{
                //отсортировать по id (в обратном порядке)
               //usersWithAddress.sort((a, b) => b.id - a.id).map((user, index) =>{
               //отсортировать его по названию улицы  в алфавитном порядке
                //usersWithAddress.sort((a,b) => a.address.street > b.address.street? 1: -1).map((user, index) =>{
                //отсортировать его по номеру дома по возрастанию
                //usersWithAddress.sort((a, b) => a.address.number - b.address.number).map((user, index) =>{
                //отфильтровать (оставить) тех кто младше 30
                //usersWithAddress.filter(item => (item.age < 30)).map((user, index) =>{
                //отфильтровать (оставить) тех у кого отрицательный статус
                //usersWithAddress.filter(item => (!item.status)).map((user, index) =>{
                //отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
                //usersWithAddress.filter(item => (!item.status && item.age < 30)).map((user, index) =>{
                //отфильтровать (оставить) тех у кого номер дома четный
                //usersWithAddress.filter(item => (item.address.number % 2 === 0)).map((user, index) =>{
                usersWithAddress.map((user, index) => {
                let cls = index % 2 ? "first" :"second";
                    return(
                        <UserComponent
                         item = {user}
                         cls = {cls}
                         key = {user.id}/>
                            )
                    })
                }
             </div>
            )
        }
 }

 export default UsersList;