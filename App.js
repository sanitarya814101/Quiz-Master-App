import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import db from './config';

import AppHeader from './components/AppHeader';

export default class App extends React.Component{

  constructor(){

    super();

    this.state = {
      teamRank:[]
    }
  }


  showTeamRank = () => {

    var teams = [];

    db.ref('/').on('value',(data)=>{

      var teamList = data.val();

      for(var i in teamList){

        if(teamList[i]['isButtonPressed']==true){
          teamList[i]['teamName'] = i;
          teams.push(teamList[i])
        }
      }

      teams.sort(function(team1,team2){

        return team1.timeStamp - team2.timeStamp
      })

      this.setState({teamRank: teams})

      teams = [];
    })

    console.log(this.state.teamRank)

  }

  componentDidMount(){

    this.showTeamRank();
  }

  resetBt=()=>{

    db.ref('/').update({

      red:{
        enabled:true,
        isButtonPressed:false,
        timeStamp:0
      },

      green:{
        enabled:true,
        isButtonPressed:false,
        timeStamp:0
      },

      blue:{
        enabled:true,
        isButtonPressed:false,
        timeStamp:0
      },

      yellow:{
        enabled:true,
        isButtonPressed:false,
        timeStamp:0
      },
    })

    this.setState({teamRank:[]})
  }


  render(){

     return (
    <View style={{flex:1}}>

    <AppHeader/>

      <View 
      style={{
          flex:1,
          justifyContent:"center",
          alignItems:"center",
          
      }}>{this.state.teamRank.map((i)=>(

        <View
        style={{

          width:140,
          height:55,
          borderWidth:2,
          justifyContent:"center",
          alignItems:"center",
          backgroundColor:i.teamName,
          margin:5
        }}>
        <Text>{i.teamName.toUpperCase()}</Text>
        </View>

      ))}</View>

      <TouchableOpacity
      style={{

        backgroundColor:'black',
        justifyContent:"center",
        alignSelf:'center',
        borderWidth:2,
        borderRadius:15,
        marginTop:50,
        width:200,
        height:50
      }}
      
      onPress = {this.resetBt}
      ><Text 
      style={{textAlign:'center',
      color:'white'}}>Reset</Text></TouchableOpacity>
    </View>
  );
  }
 
}
