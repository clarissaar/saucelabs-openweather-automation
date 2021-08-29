import { login } from "../../pages/loginPage";
import { selectAllTshirts } from "../../pages/productsPage";
import { fillCheckoutInfo, purchaseAllTshirts } from "../../pages/checkoutPage";

describe('Purchase Products', () => {
    before(() => {
        login()
    })

    it('Purchase All T-Shirts', () => {
        selectAllTshirts();
        purchaseAllTshirts();
        fillCheckoutInfo('Clarissa', 'Rodrigues', '30000');
    })
});
