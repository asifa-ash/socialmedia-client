import { Modal, useMantineTheme } from "@mantine/core";

function ProfileModel({ modelOpened, setModelOpened }) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="55%"
      opened={modelOpened}
      onClose={() => setModelOpened(false)}
    >
      {/* Modal content */}
      <form className="infoForm">
        <h3>Your Info</h3>
        <div className="div">
          <input
            type="text"
            className="infoInput"
            name="firstname"
            placeholder="First Name"
          />
          <input
            type="text"
            className="infoInput"
            name="lastname"
            placeholder="Last Name"
          />
        </div>
        <div className="div">
          <input
            type="text"
            className="infoInput"
            name="WorksAT"
            placeholder="Work at"
          />
        </div>
        <div className="div">
          <input
            type="text"
            className="infoInput"
            name="LivesIN"
            placeholder="LivesIN"
          />

          <input
            type="text"
            className="infoInput"
            name="Country"
            placeholder="Country"
          />
        </div>
        <div className="div">
          <input
            type="text"
            className="infoInput"
            placeholder="RelationShip Status"
          />
        </div>
        <div className="div">
          Profile Image
          <input type="file" name="profileImg" />
          Cover Image
          <input type="file" name="coverImg" />
        </div>
        <button className="button infoBtn">Update</button>
      </form>
    </Modal>
  );
}
export default ProfileModel;
