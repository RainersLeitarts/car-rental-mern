import styled from "styled-components";
import DatePicker from "react-datepicker";


//!!!!!!!!!!Fix issues caused by footer
export const VehiclePageWrapper = styled.div`
    width: 100%;
    display: flex; //issues caused by footer
    
    justify-content: center;
    align-items: center;
    transition: all 0.5s;
    flex-direction: column;
`

export const ContentWrapper = styled.div`
    max-width: 1200px;
    margin-top: 100px;
    margin-left: 2rem;
    margin-right: 2rem;
    width: 100%;
    
    transition: all 0.5s;
    display: flex;

    @media screen and (max-width: 600px){
        flex-direction: column;
        margin-left: 0;
        margin-right: 0;
        margin-top: 80px;
    }
`

export const LeftCol = styled.div`
    //height: 100%;
    width: 35%;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 800px){
        width: 100%
    }
`

export const RightCol = styled.div`
    //background-color: angratiquewhite;
    display: flex;
    flex-direction: column;
    width: 65%;
    height: 100%;
    padding: 0 20px;

    @media screen and (max-width: 800px){
        width: 100%
    }

    @media screen and (max-width: 600px){
        padding: 0;
    }
`

export const LeftDescriptionWrapper = styled.div`
    background-color: aliceblue;
    padding: 1.2rem 1.5rem;
    text-transform: capitalize;
    border-radius: 0 5px;
    margin-bottom: 20px;

    @media screen and (max-width: 600px){
        //margin: 0 20px 20px 20px;
    }
`

export const Make = styled.h1`
    padding: 0;
    margin: 0;
    @media screen and (max-width: 1050px){
        font-size: 24px;
    }
`

export const Model = styled.h2`
    padding: 0;
    margin: 0;
`

export const Year = styled.h3`
    color: gray;
    padding: 0;
    margin: 0;
`

export const Title = styled.div`
    padding: 0;
    margin: 0 20px;

    @media screen and (max-width: 1050px){
        margin: 0;
    }
`
export const Specifications = styled.div`
    width: 100%;
    margin-bottom: 40px;
    //background-color: beige;
    display: flex;
    justify-content: center;
`

export const SpecsIcon = styled.div`
    width: 30%;
    height: 100%;
    background-image: url(${({ img }) => img});
    background-repeat: no-repeat;
    background-size: auto;
`

export const SpecsText = styled.p`
    font-weight: 600;
    font-size: 18px;

    @media screen and (max-width: 970px){
        font-size: 16px;
    }
`

export const SpecsContainer = styled.div`
    margin-top: 2rem;
    width: 90%;
    height: 45%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1.3rem 1.3rem 1.3rem;
    grid-gap: 2rem .8rem;

    @media screen and (max-width: 1050px){
        width: 100%;
    }
`

export const SpecsItem = styled.div`
    display: flex;
    align-items: center;
`

export const ReservationWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: aliceblue;
    margin-bottom: 20px;
`

export const ReservationItemsWrapper = styled.div`
    display: flex;
    width: 100%;
    //justify-content: space-between;
    padding: 10px 0px 30px 0px;
    

    @media screen and (max-width: 970px){
        flex-direction: column;
    }
`

export const LocationInput = styled.select`
    height: 30px;
    width: 100%;
    cursor: pointer;
    background-color: #0077FF;
    border: 3px #0077FF;
    border-radius: 5px;
    color: white;
`

export const ReservationColumn = styled.div`
    display: flex;
    flex-direction: column;
    width: 33.3%;
    justify-content: center;
    align-items: center;
    padding: 0px 20px;

    @media screen and (max-width: 970px){
        width: 100%;
    }
`

export const DateWrapperFlex = styled.div`
    display: flex;
    width: 100%;
    
`

export const DatePickerWrapper = styled(({ className, ...props }) => (
    <DatePicker {...props} wrapperClassName={className} />
))`
    width: 100%;
`

export const CustomDateInputButton = styled.input.attrs(props => ({ value: props.value }))`
    height: 30px;
    width: 100%;
    margin: 0;
    border: 1px solid #0077FF;
    border-radius: 5px;
    text-align: center;
    cursor: pointer;
`

export const TimeInput = styled.input`
    width: 100%;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #0077FF;
    text-align: center;
`

export const ReservationLabel = styled.label`
    margin-top: 16px;
`

export const ReservationHeading = styled.h1`
    margin: 0;
    padding: 0;
    margin-left: 23px;
    margin-top: 20px;
`

export const InsuranceOptions = styled.div`
    display: grid;
    margin: 0px 20px;
    grid-template-columns: 50fr 50fr;
    grid-template-rows: 2;
    width: 100fr;
    gap: 20px;
    align-items: center;
    justify-content: center;
    padding-bottom: 20px;
    
    @media screen and (max-width: 970px){
        grid-template-columns: 1fr;
    }
`

export const InsuranceOption = styled.div`
    width: 100%;
    height: 90px;
    border-radius: 5px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 3px solid #0077FF;
    cursor: pointer;
    transition: all 0.5s;

    background-color: ${props => props.active ? '#0077FF' : 'transparent'};
    
    & *{
        color: ${props => props.active ? 'white' : 'black'};
    }

    &:hover{
        background-color: #0077FF;
    }

    &:hover *{
        color: white;
    }

    @media screen and (max-width: 800px){
        height: 65px;
    }
`

export const InsuranceOptionText = styled.p`
    font-weight: 600;
    font-size: 20px;
    margin: 0;
    padding: 0;
    transition: all 0.3s;
    //color: ${props => props.active ? 'white' : 'black'};
`

export const InsuranceOptionSmallText = styled.p`
    padding: 0;
    margin: 0;
    font-size: 9px;
    line-height: 5px;
    transition: all 0.3s;
`

export const ExtrasContainer = styled.div`
    margin: 0 20px;
    padding: 0;

    @media screen and (max-width: 1050px){
        margin: 0;
    }
`

export const ExtrasTitle = styled.p`
    font-size: 20px;
    font-weight: 600;
    line-height: 8px;
`

export const ExtrasValue = styled.p`
    line-height: 1px;
    margin-bottom: 30px;
`

export const TotalPrice = styled.p`
    font-size: 36px;
    font-weight: 600;
    line-height: 1px;
    margin-bottom: 30px;
    margin-top: 50px;
    color: #0077FF;
    
    @media screen and (max-width: 615px){
        font-size: 30px;
    }
`

export const RentButton = styled.button`
    width: 100%;
    height: 40px;
    font-size: 18px;
    color: white;
    margin-top: 10px;
    background-color: #0077FF;
    border: 3px solid #0077FF;
    cursor: pointer;
    border-radius: 5px;
`

//add scroll to top button when max-width 600px