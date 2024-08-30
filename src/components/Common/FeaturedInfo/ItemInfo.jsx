/* eslint-disable react/prop-types */

const ItemInfo = ({text , subText, icon , titleIcon,withoutBorderBottom }) => {
  return (
    <div className="fetured__item" style={{borderBottom:withoutBorderBottom && 'none', paddingBottom:withoutBorderBottom &&'0px', alignItems:withoutBorderBottom &&'center'}}>
        
        <div className="fetured__item_img" >
        <img src={icon} />
        <p>
            {titleIcon}
        </p>
        </div>

        <div className="fetured__item_info">
            <p className="fetured__item_info_title">
                {text}
            </p>
            <p>
                {subText}
            </p>
        </div>
      
    </div>
  )
}

export default ItemInfo
