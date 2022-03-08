/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAdmin = /* GraphQL */ `
  subscription OnCreateAdmin($owner: String) {
    onCreateAdmin(owner: $owner) {
      id
      name
      email
      phone
      imageUrl
      carwash {
        items {
          id
          name
          location
          Desc
          imageUrl
          createdAt
          updatedAt
          adminCarwashId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateAdmin = /* GraphQL */ `
  subscription OnUpdateAdmin($owner: String) {
    onUpdateAdmin(owner: $owner) {
      id
      name
      email
      phone
      imageUrl
      carwash {
        items {
          id
          name
          location
          Desc
          imageUrl
          createdAt
          updatedAt
          adminCarwashId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteAdmin = /* GraphQL */ `
  subscription OnDeleteAdmin($owner: String) {
    onDeleteAdmin(owner: $owner) {
      id
      name
      email
      phone
      imageUrl
      carwash {
        items {
          id
          name
          location
          Desc
          imageUrl
          createdAt
          updatedAt
          adminCarwashId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateCarwash = /* GraphQL */ `
  subscription OnCreateCarwash($owner: String) {
    onCreateCarwash(owner: $owner) {
      id
      name
      location
      Desc
      imageUrl
      createdAt
      updatedAt
      adminCarwashId
      owner
    }
  }
`;
export const onUpdateCarwash = /* GraphQL */ `
  subscription OnUpdateCarwash($owner: String) {
    onUpdateCarwash(owner: $owner) {
      id
      name
      location
      Desc
      imageUrl
      createdAt
      updatedAt
      adminCarwashId
      owner
    }
  }
`;
export const onDeleteCarwash = /* GraphQL */ `
  subscription OnDeleteCarwash($owner: String) {
    onDeleteCarwash(owner: $owner) {
      id
      name
      location
      Desc
      imageUrl
      createdAt
      updatedAt
      adminCarwashId
      owner
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String) {
    onCreateUser(owner: $owner) {
      id
      name
      email
      phone
      imageUrl
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String) {
    onUpdateUser(owner: $owner) {
      id
      name
      email
      phone
      imageUrl
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String) {
    onDeleteUser(owner: $owner) {
      id
      name
      email
      phone
      imageUrl
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateRegisteredCars = /* GraphQL */ `
  subscription OnCreateRegisteredCars($owner: String) {
    onCreateRegisteredCars(owner: $owner) {
      id
      userID
      brand
      regNO
      model
      Desc
      imageUrl
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateRegisteredCars = /* GraphQL */ `
  subscription OnUpdateRegisteredCars($owner: String) {
    onUpdateRegisteredCars(owner: $owner) {
      id
      userID
      brand
      regNO
      model
      Desc
      imageUrl
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteRegisteredCars = /* GraphQL */ `
  subscription OnDeleteRegisteredCars($owner: String) {
    onDeleteRegisteredCars(owner: $owner) {
      id
      userID
      brand
      regNO
      model
      Desc
      imageUrl
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateRequests = /* GraphQL */ `
  subscription OnCreateRequests($owner: String) {
    onCreateRequests(owner: $owner) {
      id
      brand
      regNO
      userName
      package
      totalDue
      status
      carwash
      o_date
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateRequests = /* GraphQL */ `
  subscription OnUpdateRequests($owner: String) {
    onUpdateRequests(owner: $owner) {
      id
      brand
      regNO
      userName
      package
      totalDue
      status
      carwash
      o_date
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteRequests = /* GraphQL */ `
  subscription OnDeleteRequests($owner: String) {
    onDeleteRequests(owner: $owner) {
      id
      brand
      regNO
      userName
      package
      totalDue
      status
      carwash
      o_date
      createdAt
      updatedAt
      owner
    }
  }
`;
