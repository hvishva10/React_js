import React from 'react'
function Recipe({food}){
    return(
        <ol>
            <li>1.Melt the Cocoa Butter: In a heatproof bowl, melt the cocoa butter using a double boiler or in the microwave in short intervals, stirring frequently until fully melted.</li>
            <li>2.Mix in Cocoa Powder: Once the cocoa butter is melted, whisk in the cocoa powder until smooth and well combined.</li>
            <li>3.Sweeten: Add in the maple syrup or honey and stir until fully incorporated. Taste and adjust the sweetness level if necessary.</li>
            <li>4.Add Flavor: Stir in the vanilla extract and a pinch of salt for enhanced flavor.</li>
            <li>5.Pour into Molds: Pour the chocolate mixture into molds of your choice. You can use silicone molds, ice cube trays, or even just a parchment-lined baking sheet.</li>
            <li>6.Set: Place the molds in the refrigerator for at least 1-2 hours, or until the chocolate has hardened completely.</li>
            <li>7.Enjoy: Once the chocolate has set, remove it from the molds and enjoy! Store any leftovers in an airtight container in the refrigerator for up to two weeks.</li>
        </ol>
    )
}

const Chocolate = () => {
    return (
        <div>
          <h1> chocolate recipe</h1>
          <h2> for one</h2>
          <Recipe food={3}/>
        </div>
      )
}

export default Chocolate