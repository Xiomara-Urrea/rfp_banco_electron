import findIndex from 'lodash/findIndex'
import { makeRequestAsync } from '../services'
import { CREDIT_GET, CREDIT_GETBYID, CREDIT_UPDATE } from '../constants/credit.constans';


const updateCredit = (client_id, creditUpdate) => {
    const request = () => ({
        type: CREDIT_UPDATE.REQUEST,
        payload: {
            isLoading: true,
            error: '',
        }
    })

    const success = (index, credit) => ({
        type: CREDIT_UPDATE.SUCCESS,
        payload: {
            index,
            credit,
            isLoading: false,
        }
    })

    const failure = (error) => ({
        type: CREDIT_UPDATE.FAILURE,
        payload: {
            isLoading: false,
            error
        }
    })

    return async (dispatch, getSatet) => {
        dispatch(request());
        try {
            const { clients } = getState().client;
            const index = findIndex(clients, { _id: client_id });

            if (index === -1) return dispatch(failure("Credit Not found"));

            const creditEdit = {
                addCredit: true,
                valueCredit: 450000,
                startDate: "20/09/2018 12:00",
                endDate: "20/09/2019 12:00"
            };

            const client = await makeRequestAsync(`/clients/${client_id}/credit`, "PUT", creditEdit);
            console.log("############", credit)

            dispatch(success(index, client));
            M.toast({ html: `${client.data.status}`, classes: 'rounded' });
        } catch (error) {
            const message = error.message || error;
            dispatch(failure(message));
        }
    }
}



export const creditActions = {

}