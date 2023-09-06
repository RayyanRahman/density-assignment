import React from "react";
import { motion } from "framer-motion";

const SixthSection = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#edf6fa",
          padding: "20px",
          borderRadius: "20px",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "-20px" }}>
          Let your friends , family and coworkers (Anonymously) rate your social
          skills.
        </div>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontWeight: "bold", fontSize: "60px" }}>
            Ever wondered what others think of you ?
          </h1>
        </div>

        <motion.h5
          initial={{ scale: 0.5, opacity: 0.1 }}
          whileInView={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 1 }}
        >
          <div
            style={{
              textAlign: "center",
              borderBottom: "5px dashed goldenrod",
              width: "65%",
              marginLeft: "190px",
              marginBottom: "-28px",
            }}
          ></div>

          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div
              style={{
                width: "50px",
                height: "50px",
                backgroundColor: "goldenrod",
                borderRadius: "50%",
                textAlign: "center",
                color: "white",
                border: "5px dashed wheat",
              }}
            >
              1
            </div>
            <div
              style={{
                width: "50px",
                height: "50px",
                backgroundColor: "goldenrod",
                borderRadius: "50%",
                textAlign: "center",
                color: "white",
                border: "5px dashed wheat",
              }}
            >
              2
            </div>
            <div
              style={{
                width: "50px",
                height: "50px",
                backgroundColor: "goldenrod",
                borderRadius: "50%",
                textAlign: "center",
                color: "white",
                border: "5px dashed wheat",
              }}
            >
              3
            </div>
          </div>
        </motion.h5>

        <motion.h5
          initial={{ scale: 0.5, opacity: 0.1 }}
          whileInView={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 1 }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              padding: "10px 10px",
            }}
          >
            <div
              style={{
                textAlign: "start",
                width: "20%",
                fontSize: "18px",
                lineHeight: "20px",
              }}
            >
              Answer questions on social skill
            </div>
            <div
              style={{
                textAlign: "start",
                width: "20%",
                fontSize: "18px",
                lineHeight: "20px",
              }}
            >
              Let others anonymously answer questions about you
            </div>
            <div
              style={{
                textAlign: "start",
                width: "20%",
                fontSize: "18px",
                lineHeight: "20px",
              }}
            >
              {" "}
              Find out where you and others see things the same way - and where
              not!
            </div>
          </div>
        </motion.h5>

        <div
          style={{
            backgroundColor: "white",
            width: "60%",
            height: "200px",
            marginLeft: "190px",
            borderRadius: "10px",
          }}
        >
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div style={{ marginTop: "20px" }}>
              <span
                style={{
                  backgroundColor: "rgba(59,130,246,1)",
                  color: "white",
                  padding: "1px 3px 1px 3px",
                  borderRadius: "10px",
                  marginLeft: "50px",
                  fontSize: "20px",
                }}
              >
                You
              </span>{" "}
              <span
                style={{
                  backgroundColor: "#ffb74d",
                  color: "white",
                  padding: "1px 3px 1px 3px",
                  borderRadius: "10px",
                  marginLeft: "220px",
                  fontSize: "20px",
                }}
              >
                Anonymonos 2
              </span>
            </div>
          </motion.div>

          <div
            style={{
              textAlign: "center",
              borderBottom: "1px solid lightgrey",
              width: "70%",
              marginLeft: "70px",
              marginTop: "20px",
              marginBottom: "-5px",
              display: "flex",
            }}
          ></div>

          <motion.div
            initial={{ x: 200, opacity: 0, scale: 0.5 }}
            whileInView={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
          >
            <div style={{ display: "flex" }}>
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  backgroundColor: "rgba(59,130,246,1)",
                  borderRadius: "50%",
                  marginLeft: "70px",
                }}
              ></div>
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  backgroundColor: "skyblue",
                  marginLeft: "120px",
                  borderRadius: "50%",
                }}
              ></div>
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  backgroundColor: "#ffb74d",
                  marginLeft: "160px",
                  borderRadius: "50%",
                }}
              ></div>
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  backgroundColor: "lightgreen",
                  marginLeft: "140px",
                  borderRadius: "50%",
                }}
              ></div>
            </div>

            <div style={{ marginTop: "30px" }}>
              <span
                style={{
                  backgroundColor: "skyblue",
                  color: "white",
                  padding: "1px 3px 1px 3px",
                  borderRadius: "10px",
                  marginLeft: "140px",
                  fontSize: "20px",
                }}
              >
                Anonymonos 1
              </span>{" "}
              <span
                style={{
                  backgroundColor: "lightgreen",
                  color: "white",
                  padding: "1px 3px 1px 3px",
                  borderRadius: "10px",
                  marginLeft: "200px",
                  fontSize: "20px",
                }}
              >
                Anonymonos 4
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default SixthSection;
