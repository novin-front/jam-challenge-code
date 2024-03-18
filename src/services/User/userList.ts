import { TableDataType, userDataType ,Address,ColumnType } from './../types/UserType/index';

export const columns: ColumnType[] = [
    { id: "id", label: "#", minWidth: 20 },
    { id: "fullName", label: "ناو و نام خانوادگی", minWidth: 120 },
    { id: "userName", label: "شناسه کاربری", minWidth: 100 },
    {
      id: "address",
      label: "آدرس",
      minWidth: 170,
    },
    {
      id: "action",
      label: "اقدامات",
      minWidth: 170,
    },
];
export const shortenAddress = (address: Address): string => {
    let addressString = (address?.city +" "+ address?.street + " " + address?.zipcode)
    return addressString.slice(0, 10) + "...";
};
export const fullAddress = (address: Address): string => {
  let addressString = (address?.city +" "+ address?.street + " " + address?.zipcode)
  return addressString;
};
export const createData = (
    id: string | number,
    fullName: string,
    userName: string,
    address: Address
): TableDataType => {
    let smallAddress = shortenAddress(address);
    return {
      id: id,
      fullName: fullName,
      userName: userName,
      address: smallAddress,
    };
}
export const cleanData = (apiResult : userDataType[]) => {
    let dataList:TableDataType[] = [];
    apiResult.map((item :userDataType ) => {
      dataList.push(createData(item.id,item.name,item.username,item.address));
    });
    return dataList;
};
export const getUserData =async (): Promise<any>  => {
    return await fetch("https://jsonplaceholder.typicode.com/users/", {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((response) => response.json())
    .catch( (error) =>{
      return error;
    });
};
export const deleteUserById = async (id: number | string): Promise<any>  => {
    return await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.json())
    .catch( (error) =>{
        return error;
    });
};
