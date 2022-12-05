import CategoryItem from "../category/category-item.component"
import categories from "../category/categories.component"
import './directory.style.scss'
const Directory = () =>{
    return(<div className='categories-container'>
        {categories.map((category)=>{
          return(
            <CategoryItem key={category.id} category={category}/>
          )
        })}


      </div>)
}

export default Directory