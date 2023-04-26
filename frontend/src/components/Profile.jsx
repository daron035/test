import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import {
  Card,
  Divider,
  Form,
  Grid,
  Label,
  Header,
  Menu,
  Message,
  Select,
} from "semantic-ui-react";
import { addressListURL, addressCreateURL, countryListURL } from "../contacts";
import MyLoader from "../UI/Loader/Loader";
import Alert from "react-bootstrap/Alert";
import { authAxios } from "../utils";

const Profile = () => {
  const mmm = useSelector((state) => state.auth?.user?.id);

  const [activeItem, setActiveItem] = useState("billingAddress");
  const [fetch, setFetch] = useState({
    addresses: [],
    loading: false,
    error: null,
  });
  const [formData, setFormData] = useState({
    user: mmm,
    default: false,
    address_type: activeItem === "billingAdsress" ? "B" : "S",
  });
  const [countries, setCountries] = useState([]);
  const [createAddress, setCreateAddress] = useState({
    saving: false,
    success: false,
  });

  useEffect(() => {
    handleFetchCountries();
    handleFetchAddresses();
  }, []);

  const handleItemClick = (name) => {
    setActiveItem(name);
    handleFetchAddresses(activeItem);
  };

  const handleFormatCountries = (countries) => {
    const keys = Object.keys(countries);
    return keys.map((k) => {
      return {
        key: k,
        text: countries[k],
        value: k,
      };
    });
  };

  const handleFetchCountries = async () => {
    await axios
      .get(countryListURL)
      .then((res) => {
        setCountries(handleFormatCountries(res.data));
      })
      .catch((err) => setFetch({ ...fetch, error: err }));
  };

  const handleFetchAddresses = async (activeItem) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
      },
    };
    const body = {};
    setFetch({ ...fetch, loading: true });
    await axios
      .get(
        addressListURL(activeItem === "billingAddress" ? "B" : "S"),
        config,
        body
      )
      .then((res) => {
        setFetch({ ...fetch, addresses: res.data, loading: false });
      })
      .catch((err) => setFetch({ ...fetch, error: err }));
  };

  const handleToggleDefault = (e) => {
    setFormData({ ...formData, default: !formData.default });
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (e, { name, value }) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleCreateAddress = async (e) => {
    setCreateAddress({ saving: true });
    const body = {
      formData,
    };
    setFetch({ ...fetch, loading: true });
    await authAxios
      .post(addressCreateURL, body.formData)
      .then((res) => {
        setCreateAddress({ saving: false, success: true });
      })
      .catch((err) => setFetch({ ...fetch, error: err }));
  };

  return (
    <Grid container columns={2} divided className="mt-4">
      <Grid.Row columns={1}>
        <Grid.Column>
          {fetch.error && (
            <Alert variant="danger" className="w-11/12">
              <Alert.Heading>There was an error</Alert.Heading>
              <p>{fetch.error} </p>
            </Alert>
          )}
          {fetch.loading && <MyLoader />}
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={6}>
          <Menu pointing vertical fluid>
            <Menu.Item
              name="Billing Address"
              active={activeItem === "billingAddress"}
              onClick={() => handleItemClick("billingAddress")}
            />
            <Menu.Item
              name="Shipping Address"
              active={activeItem === "shippingAddress"}
              onClick={() => handleItemClick("shippingAddresss")}
            />
          </Menu>
        </Grid.Column>
        <Grid.Column width={10}>
          <Header>{`Update your ${
            activeItem === "billingAddress" ? "billing" : "shipping"
          } address`}</Header>
          <Divider />
          <Card.Group>
            {fetch.addresses.map((a) => {
              return (
                <Card key={a.id}>
                  <Card.Content>
                    {a.default && (
                      <Label color="blue" ribbon="right">
                        Default
                      </Label>
                    )}
                    <Card.Header>
                      {a.street_address}, {a.apartment_address}
                    </Card.Header>
                    <Card.Meta>{a.country}</Card.Meta>
                    <Card.Description>{a.zip}</Card.Description>
                  </Card.Content>
                </Card>
              );
            })}
          </Card.Group>
          {fetch.addresses.length > 0 ? <Divider /> : null}
          <Form
            onSubmit={(e) => handleCreateAddress()}
            success={createAddress.success}
          >
            <Form.Input
              // required
              name="street_address"
              placeholder="Street address"
              onChange={handleChange}
            />
            <Form.Input
              // required
              name="apartment_address"
              placeholder="Apartment address"
              onChange={handleChange}
            />
            {/* counrty select field */}
            <Form.Field required>
              <Select
                loading={countries.length < 1}
                fluid
                clearable
                search
                options={countries}
                // options={[]}
                name="country"
                placeholder="Country"
                onChange={handleSelectChange}
              />
            </Form.Field>
            <Form.Input
              // required
              name="zip"
              placeholder="Zip code"
              onChange={handleSelectChange}
            />
            <Form.Checkbox
              name="default"
              label="Make this the default address?"
              onChange={handleToggleDefault}
            />
            {createAddress.success && (
              <Message
                success
                header="Success!"
                content="Your address was saved"
              />
            )}
            <Form.Button
              disabled={createAddress.saving}
              loading={createAddress.saving}
              primary
            >
              Save
            </Form.Button>
          </Form>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Profile;
