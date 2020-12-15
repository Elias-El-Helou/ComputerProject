import React,{Component,useState,useEffect} from 'react'
import { FlatList, StyleSheet, ImageBackground, Text, View, ActivityIndicator, Image } from 'react-native';
import data from './computers1.js'

 class GamingScreen extends Component {
  /*constructor(props){
    super(props);
    this.state={
      isLoading:true,
      dataSource:[],
        };
  }
  componentDidMount(){
    this.setState({
      isLoading: false,
      dataSource: data.computers
    });
  }
     searchFilter () {
       return this.props.data.filter((item) => {
        const regex = new RegExp(this.state.searchInput, "gi")
         return item.label.match(regex);
     })
   }*/
  render() {
    /*if(this.state.isLoading){
      return(       
        <ImageBackground source={require('./assets/Gamingpic.png')}
          style={styles.background}
          blurRadius={2}>
          
             <ActivityIndicator/>
          
           </ImageBackground>
          )
              }*/

    return (
      <ImageBackground source={require('./assets/Gamingpic.png')}
      style={styles.background}
      blurRadius={1}>
        <FlatList 
        data={data.filter(item=>item.typeid==1)}
        renderItem={({item})=>{
          return(
          <View style={{
              flex:1,
              flexDirection:'row',
              borderWidth:2,
              borderColor:"#A93800"

            }}>
          <Image style={styles.laptopimg} source={item.image}></Image>

            <View >

              <Text style={styles.txt}>Name:{item.name},</Text>
              <Text style={styles.txt}>Type Name:{item.typename}</Text>
              <Text style={styles.txt}>Specs:{item.specs.size}, </Text> 
              <Text style={styles.txt}>{item.specs.category},</Text>
              <Text style={styles.txt}>{item.specs.vga},</Text>
              <Text style={styles.txt}>{item.specs.color}</Text>
              <Text style={styles.txt}>{item.specs.cpu},</Text>
              <Text style={styles.txt}>{item.specs.memory}.</Text>
              
            </View>
          </View>
          )
        }}
        keyExtractor={(_item, index)=>index.toString()}
       />

      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
     background: {
    flex:1,
    alignItems:"center",
    
    
  },
  title: {
    fontSize: 32,
  },
  laptopimg:{
    margin:5,
    
    height:200,
    width:240, 
    
  },
  txt:{
    padding:4,
    fontSize:12,
    fontWeight:'bold',
    color:"#A93800"
  }
});
export default GamingScreen;


  