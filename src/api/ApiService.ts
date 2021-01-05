import jsonp from "jsonp";
import {RoomItem} from "../model/RoomItem";
import {SearchFormValues} from "../model/SearchFormValues";

class ApiService {

    fetchData(searchFormValues: SearchFormValues) : Promise<RoomItem[]> {
        const dateFrom = searchFormValues.dateFrom;
        const dateTo = searchFormValues.dateTo;
        const nbAdults = searchFormValues.nbAdults;
        const nbChildren = searchFormValues.nbChildren;
        return new Promise((resolve, reject) => {
            jsonp(
                `http://testapi.itur.pl/api.php?date_from=${dateFrom}&date_to=${dateTo}&nb_adults=${nbAdults}&nb_children=${nbChildren}`,
                (err: Error | null, data: RoomItem[]) => {
                    if (err) {
                        reject(err.message);
                    } else {
                        resolve(data);
                    }
                }
            );
        });
    }
}

export default new ApiService();