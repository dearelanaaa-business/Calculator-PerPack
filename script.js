document.addEventListener("DOMContentLoaded", function() {
    function calculateSmallPackProfit() {
        let bigPackQuantity = parseFloat(document.getElementById('bigPackQuantity').value) || 0;
        
        let costPerBigPack = 15.9 / 2; // Cost of one big pack
        let totalSmallPacks = bigPackQuantity * 3; // Corrected: Each big pack gives 3 small packs
        let costPerSmallPack = costPerBigPack / 3; // Cost per small pack
        let sellingPricePerSmallPack = 3.5; // Fixed selling price
        let profitPerSmallPack = sellingPricePerSmallPack - costPerSmallPack; // Profit calculation
        
        document.getElementById('oneBigPackCost').value = `MYR ${costPerBigPack.toFixed(2)}`;
        document.getElementById('totalSmallPacks').value = totalSmallPacks.toFixed(0);
        document.getElementById('costPerSmallPack').value = `MYR ${costPerSmallPack.toFixed(2)}`;
        document.getElementById('profitPerSmallPack').value = `MYR ${profitPerSmallPack.toFixed(2)}`;
    }
    
    document.getElementById('bigPackQuantity').addEventListener('input', calculateSmallPackProfit);
});
