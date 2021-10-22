import db from '../firebase'
import { doc, getDoc, runTransaction } from "firebase/firestore";

const docRef = doc(db, "codes", "hjDTL3sTtxxcABGeI6yp");
class codeService {
    // GET ONE MONTH
    async getOneMonthCodes() {
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            const codes = docSnap.data();
            const OneMonthCodes = codes.oneMonthCodes
            return OneMonthCodes[0];
        } else {
            return "No code available yet!";
        }
    }
    // GET THREE MONTHS
    async getThreeMonthsCodes() {
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            const codes = docSnap.data();
            const ThreeMonthsCodes = codes.threeMonthsCodes
            return ThreeMonthsCodes[0];
        } else {
            return "No code available yet!";
        }
    }
    // GET SIX MONTHS
    async getSixMonthsCodes() {
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            const codes = docSnap.data();
            const SixMonthsCodes = codes.sixMonthsCodes
            return SixMonthsCodes[0];
        } else {
            return "No code available yet!";
        }
    }
    // GET TWELVE MONTHS
    async getTwelveMonthsCodes() {
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            const codes = docSnap.data();
            const TwelveMonthsCodes = codes.twelveMonthsCodes
            return TwelveMonthsCodes[0];
        } else {
            return "No code available yet!";
        }
    }
    // UPDATE ONE MONTH
    async updateOneMonthCodes() {
        try {
            await runTransaction(db, async (transaction) => {
                const sfDoc = await transaction.get(docRef);
                if (!sfDoc.exists()) {
                    throw "Document does not exist!";
                }else{
                    const newCodes = sfDoc.data().oneMonthCodes.slice(1)
                    transaction.update(docRef, { oneMonthCodes: newCodes });
                }
            });
        } catch (e) {
            console.error(e);
        }
    }
    // UPDATE THREE MONTHS
    async updateThreeMonthsCodes() {
        try {
            await runTransaction(db, async (transaction) => {
                const sfDoc = await transaction.get(docRef);
                if (!sfDoc.exists()) {
                    throw "Document does not exist!";
                }else{
                    const newCodes = sfDoc.data().threeMonthsCodes.slice(1)
                    transaction.update(docRef, { threeMonthsCodes: newCodes });
                }
            });
        } catch (e) {
            console.error(e);
        }
    }
    // UPDATE SIX MONTHS
    async updateSixMonthsCodes() {
        try {
            await runTransaction(db, async (transaction) => {
                const sfDoc = await transaction.get(docRef);
                if (!sfDoc.exists()) {
                    throw "Document does not exist!";
                }else{
                    const newCodes = sfDoc.data().sixMonthsCodes.slice(1)
                    transaction.update(docRef, { sixMonthsCodes: newCodes });
                }
            });
        } catch (e) {
            console.error(e);
        }
    }
    // UPDATE TWELVE MONTHS
    async updateTwelveMonthsCodes() {
        try {
            await runTransaction(db, async (transaction) => {
                const sfDoc = await transaction.get(docRef);
                if (!sfDoc.exists()) {
                    throw "Document does not exist!";
                }else{
                    const newCodes = sfDoc.data().twelveMonthsCodes.slice(1)
                    transaction.update(docRef, { twelveMonthsCodes: newCodes });
                }
            });
        } catch (e) {
            console.error(e);
        }
    }
}

export default new codeService();


