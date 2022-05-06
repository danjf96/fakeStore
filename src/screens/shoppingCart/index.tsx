import React, { useState } from 'react'
import { FlatList, Image, Text, View } from 'react-native'
import Colors from '../../assets/Colors'
import { GlobalsStyles } from '../../assets/Globals'
import CardProduct from '../../components/cardProduct'
import { CARDPRODUCCTPROPS } from '../../components/cardProduct/types'
import Container from '../../components/container'
import CustomButton from '../../components/customButton'
import Header from '../../components/header'
import InfoModal from '../../components/infoModal'
import { useAppDispatch, useAppSelector } from '../../store'
import { changeCartProduct } from '../../store/ducks/shoppingCart'
import { formatMoney } from '../../utils/functions'
import Styles from './styles'
const left = require('../../assets/images/arrow_left.png')
const logo = require('../../assets/images/logo.png')

const ShoppingCart = (props:any) => {

    const dispatch = useAppDispatch()
    const { shoppingCart: { list,  total } } = useAppSelector( ({ shoppingCart  } ) => ({  shoppingCart }) )
    const [ openModal, setOpenModal ] = useState(false)
    const [ rmProduct, setRmProduct ] = useState<CARDPRODUCCTPROPS>()

    const finish = () => props.navigation.navigate('Finish')
    
    const changeValue = (type: 'add' | 'rm', product?: CARDPRODUCCTPROPS ) => {
        if(product?.quantity === 1 && type === 'rm' && !openModal){
            setRmProduct(product)
            setOpenModal(true)
        }
        else
            product && dispatch(changeCartProduct(type, list, product))
    }

    return (
        <>
            <Container style={{ height: '100%' }}>

                <Header buttonLeft={left} title='carrinho' onPressLeft={ () => props.navigation.goBack()}/>

                <Text style={{ ...GlobalsStyles.title, marginTop: 30 }}>Meu carrinho</Text>
                
                {list.length === 0 
                    ?
                    <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '50%'}}>
                        <Image source={logo}  style={Styles.imageEmpty}/>
                        <Text style={Styles.textEmpty}>Nenhum item adicionado no carrinho.</Text>
                        <CustomButton 
                            text='ADICIONAR ITENS'
                            onPress={() => props.navigation.navigate('Home')}
                            style={{ backgroundColor: '#8775FE'}}
                        />
                    </View>
                    
                    :
                    <>
                        <FlatList 
                            renderItem={ ({ item, index}) => <CardProduct 
                                    data={item}
                                    styleContainer={Styles.productContainer}
                                    onPressButton={changeValue}
                                    testID='cart'
                                />
                            }
                            keyExtractor={ (item,index) => `cart${index}`}
                            data={list}
                            style={{ marginVertical: 20, }}
                        />   

                    
                        <View style={Styles.containerPrice}>
                            <Text style={Styles.price}> Total: </Text>
                            <Text style={Styles.price}>R$ {formatMoney(total)}</Text>
                        </View>
                        
                            
                        <View style={{ width: '100%', paddingHorizontal: 29, paddingTop: 20  }}>
                            <CustomButton 
                                text='FINALIZAR COMPRA'
                                onPress={finish}
                            />
                        </View>
                    </>
                }   


                <InfoModal  
                    // testID='finishModal'
                    visible={openModal}
                    title={'Remover Item'} 
                    text={'Se deseja remover o item do carrinho clique em prosseguir.'} 
                    textSuccess={'PROSSEGUIR'} 
                    textCancel='CANCELAR' 
                    btnSuccess={() => {
                        setOpenModal(false)
                        changeValue('rm', rmProduct)
                    }} 
                    btnCancel={() => setOpenModal(false)}
                />  

            </Container>
        </>

    )
}

export default ShoppingCart