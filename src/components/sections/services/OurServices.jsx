import {
  Container,
  Button,
  Typography,
  Box,
  CardContent,
  Card,
  CardMedia,
} from "@mui/material";

const OurServices = () => {
  return (
    <Container>
      <Box className="!flex gap-5">
        <div className="flex flex-col gap-6 dark:text-white justify-center">
          <div>
          <Button
            variant="outlined"
            className="!bg-[#e0dbfc] !border-0  !tracking-[1px] font-extrabold !text-[#8573f0]"
          >
            OUR SERVICES
          </Button>
          </div>
          
          <p className="text-5xl font-bold tracking-[2px]">
            Behind The Story Of Slack Digital Agency
          </p>
          <div className="flex flex-col gap-6 text-lg ">
            <p>
              Suspendisse potenti. Donec vel massa ut justo efficitur lacinia
              non ut felis. Etiam euismod, magna et efficitur ullamcorper, justo
              justo suscipit tellus, quis egestas lectus nulla ac velit. Morbi
              consequat vehicula tincidunt.
            </p>
            <p>
              Suspendisse purus nibh, lacinia ut rutrum eu, tincidunt eleifend
              ligula. Maecenas tristique est vitae erat semper pellentesque.
            </p>
            <p>
              Mauris sollicitudin tincidunt libero ac suscipit. Quisque
              ullamcorper consequat dui ut molestie.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-7">
          <Card sx={{ display: "flex", marginRight: 5 }}>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image="https://samartheme2.vercel.app/images/about/pic1.jpg"
              alt="Live from space album cover"
            />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5">
                  Live From Space
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis quaerat Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Perferendis quaerat
                </Typography>
              </CardContent>
            </Box>
          </Card>
          <Card sx={{ display: "flex", marginLeft: 5 }}>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image="https://samartheme2.vercel.app/images/about/pic1.jpg"
              alt="Live from space album cover"
            />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5">
                  Live From Space
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis quaerat  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis quaerat
                </Typography>
              </CardContent>
            </Box>
          </Card>
          <Card sx={{ display: "flex", marginRight: 5}}>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image="https://samartheme2.vercel.app/images/about/pic1.jpg"
              alt="Live from space album cover"
            />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5">
                  Live From Space
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis quaerat  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis quaerat
                </Typography>
              </CardContent>
            </Box>
          </Card>
        </div>
      </Box>
    </Container>
  );
};

export default OurServices;
