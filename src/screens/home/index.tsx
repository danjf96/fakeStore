import React, { useEffect } from 'react'
import { ActivityIndicator, FlatList, Text, useColorScheme, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Colors from '../../assets/Colors'
import { GlobalsStyles } from '../../assets/Globals'
import Container from '../../components/container'
import CustomButton from '../../components/customButton'
import Header from '../../components/header'
import Product from '../../components/product'
import { useAppDispatch, useAppSelector } from '../../store'
import { changeCategoriesCard, getCategories } from '../../store/ducks/categoriesProduct'
import { getProducts } from '../../store/ducks/products'
import { changeCartProduct } from '../../store/ducks/shoppingCart'
import Styles from './styles'

const logo_icon = require('../../assets/images/logo_icon.png')

const Home = (props: any) => {
    
    const dispatch = useAppDispatch()
    const theme = useColorScheme()
    const { categoriesProduct, products, shoppingCart } = useAppSelector( state => state )

    const getList = (cateogry?: string) => dispatch(getProducts(cateogry))
    const changeCategory = (value:string) => dispatch(changeCategoriesCard('category',value))

    const next = () => props.navigation.navigate('ShoppingCart')

    const pressProduct = (product:any) =>  dispatch(changeCartProduct('add', shoppingCart.list, product))

    useEffect( () => {
        dispatch(getCategories())
        getList()
    }, [])

    useEffect( () => getList(categoriesProduct.category) , [categoriesProduct.category])

    return (
        <Container style={{ height: '100%' }}>
            <Header 
                buttonLeft={'Produtos'}
                buttonRight={logo_icon}
                styleTextLeft={{ color: 'black', fontSize: 18, marginBottom: 20 }}
                onPressRight={() => props.navigation.navigate('ShoppingCart')}
            />
            
            {products.loading && <ActivityIndicator size={'large'} testID='loading' color={Colors.principal}/>}
            
            {!products.loading &&  
                <ScrollView 
                    style={{ height: '95%'}} 
                    scrollEnabled={true} showsVerticalScrollIndicator={false}
                >
                    <Text style={Styles().titleCategory}>FILTRAR CATEGORIA</Text>

                    <FlatList 
                        keyboardShouldPersistTaps='always'
                        data={categoriesProduct.list}
                        renderItem={({ item }) => {
                                const selected = categoriesProduct.category !== item ? Styles().buttonDisable : null
                                return (<CustomButton 
                                text={item}
                                style={[Styles().buttonCategory, selected ? Styles().buttonDisable : null ]}
                                stylesText={selected ? Styles().textDisable : {}}
                                onPress={ () => changeCategory(item)}
                            />)
                        }}
                        keyExtractor={ (item, i) => `categorie${i}` }
                        horizontal={true}
                        style={{ width: '100%' }}
                        showsHorizontalScrollIndicator={false}
                    />

                    <Text style={{ ...GlobalsStyles.title, marginTop: 35}}>Novidades</Text>

                    <FlatList 
                        keyboardShouldPersistTaps='always'
                        data={products.newsList}
                        renderItem={({ item }) => <Product 
                            data={item}
                            theme={theme}
                            testID={'newsproduct'}
                            onPressButton={pressProduct}
                        />}
                        keyExtractor={ (item, i) => `product_${item.id}` }
                        horizontal={true}
                        style={{ width: '100%' }}
                        showsHorizontalScrollIndicator={false}
                    />

                    <View style={GlobalsStyles.line}></View>

                    <Text style={{ ...GlobalsStyles.title, marginTop: 35}}>Listagem</Text>

                    <View style={{ width: '100%', flex: 1, flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between' }}>
                        {products.list.map( (item, index) => {
                            return (
                                <Product 
                                    data={item}
                                    typeStyle='small'
                                    theme={theme}
                                    key={`product_${item.id}` }
                                    styleContainer={{ marginBottom: 15 }}
                                    testID={'product'}
                                    onPressButton={pressProduct}
                                />
                            )
                        })}
                    </View>
                </ScrollView>}
                
            {shoppingCart.list.length > 0 && <View style={{ width: '100%', paddingHorizontal: 29, paddingVertical: 10 }}>
                <CustomButton 
                    text='IR PARA CARRINHO'
                    onPress={next}
                />
            </View>}
        </Container>
    )
}

export default Home