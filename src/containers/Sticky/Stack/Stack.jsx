import React from 'react';
import Container from 'react-bootstrap/lib/Container';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Card from 'react-bootstrap/lib/Card';
import StickyComponent from '../../../packages/sticky';

class Stack extends React.Component {
  render() {
    return (
      <Container fluid>
        <StickyComponent>
          <Card>
            <h1>Sticky Component stacked</h1>
            <p>
              You can use multiplie Stickies and stacked them.
            </p>
          </Card>
        </StickyComponent>

        <Row>
          <Col xs={2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus nunc, consequat et lorem nec, aliquam rutrum neque. Sed eget faucibus odio. Phasellus rutrum scelerisque diam vel dapibus. Aenean accumsan non nunc quis hendrerit. Morbi vel semper neque. Proin quam ipsum, euismod at neque at, ullamcorper feugiat justo. Integer viverra magna nisl, quis pulvinar tortor luctus pharetra. Ut gravida condimentum est id vestibulum. Nulla mollis sem ac orci eleifend tristique eget pharetra libero. Integer sed risus non urna posuere lacinia nec suscipit neque. Nam vitae ornare nunc, eget laoreet arcu. Phasellus ut erat sed urna consectetur pulvinar. In urna turpis, aliquet at sem eu, malesuada suscipit arcu. Morbi sodales molestie justo id tincidunt. Proin in dapibus nunc, vel iaculis eros. Morbi nibh orci, convallis sit amet ligula mollis, viverra bibendum diam.

            Aliquam accumsan vitae nisi ac convallis. Maecenas euismod vehicula posuere. Pellentesque id porta felis, quis tincidunt metus. Nullam sed arcu diam. Curabitur convallis, ligula eu euismod egestas, dolor felis commodo urna, at molestie eros velit ac orci. Nulla facilisi. Ut non ante quis lacus vestibulum porttitor quis a odio. Ut pulvinar ex quam, feugiat aliquam libero facilisis blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed aliquam massa, ut tempor enim. Duis blandit vel arcu sit amet bibendum. Phasellus vestibulum enim nibh, sed convallis mi consectetur at. Aliquam rhoncus lacinia finibus. Fusce vestibulum, nunc facilisis tincidunt sodales, tellus urna vehicula lacus, nec congue metus est non odio. Pellentesque laoreet lorem felis, id pellentesque sapien laoreet non.

            Integer non ex quis risus egestas aliquet. Mauris lacinia urna diam, at iaculis nunc auctor at. Nam congue dapibus lacus iaculis gravida. Etiam nec pellentesque dolor, et feugiat ante. Phasellus vel sem nec lectus rutrum hendrerit sed quis sapien. Curabitur semper, nulla non posuere placerat, mauris ex viverra lectus, nec maximus est tellus ut arcu. Nam non condimentum justo. Pellentesque posuere lacus euismod dui molestie, sed venenatis lorem blandit. Etiam rhoncus eget lacus non interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

            Vestibulum nec iaculis ante, ut fringilla felis. Cras consectetur auctor laoreet. Morbi non elementum lectus. Aenean laoreet sollicitudin aliquam. Praesent gravida tincidunt hendrerit. Nunc interdum laoreet dui non lacinia. Suspendisse vel mi eget quam posuere sollicitudin. Fusce diam dolor, vulputate et nibh eu, interdum facilisis ex. Donec elementum nulla elit, placerat vehicula eros interdum id. Vivamus ullamcorper viverra risus eu tincidunt. Proin iaculis leo non ante pretium rhoncus. Mauris molestie mollis diam, eget pulvinar justo sollicitudin vitae. Mauris convallis, nisi sed dictum lacinia, mi odio euismod lacus, eu porttitor turpis metus in diam. Duis mollis diam luctus, placerat neque id, efficitur felis. Ut quis mi vel turpis volutpat efficitur. Curabitur ullamcorper id odio vitae sollicitudin.

            In volutpat ligula at risus vulputate ornare. Quisque consectetur quam sapien, vitae sodales lacus euismod eu. Nulla neque ipsum, viverra in enim ac, elementum dignissim tellus. Fusce vestibulum nisl in ligula finibus mollis. Nunc vel ligula aliquam ligula euismod lacinia eu a odio. Sed vestibulum eros vitae enim sagittis, vitae pharetra eros pellentesque. Vestibulum eu aliquam justo, et tincidunt risus. Duis id augue luctus, sagittis felis ultrices, laoreet mauris. Pellentesque vestibulum eleifend orci sed bibendum. Ut euismod est diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus in vulputate neque. Ut rutrum leo ultricies tellus luctus, a consequat erat porta. Nulla tempor blandit libero in finibus.

            Integer bibendum mi quis nulla commodo, sed pellentesque orci molestie. Cras risus purus, pellentesque sed ultrices ut, pellentesque vitae ex. Duis molestie lacinia turpis ac fringilla. Quisque volutpat tempus tortor nec viverra. Nulla vel congue ligula, id viverra elit. In erat neque, porttitor in ultricies eget, aliquet quis massa. In id lectus eros. Curabitur in lorem feugiat, tincidunt nisl ut, imperdiet massa.

            Etiam tincidunt fermentum lectus, ut eleifend neque ullamcorper vitae. Proin fringilla placerat arcu, ac vestibulum ligula pharetra eu. Fusce semper porttitor accumsan. Morbi efficitur odio a ipsum consequat, a iaculis dui hendrerit. Maecenas iaculis ut odio sed sagittis. Sed sit amet dolor accumsan nibh tristique dignissim. Ut quis tincidunt sapien. Donec lobortis volutpat massa, vitae volutpat quam tempor in. Nulla eu augue quis turpis gravida placerat. Integer interdum varius ante vitae viverra. Nulla volutpat ante nec mollis rhoncus. Aliquam id urna vulputate dolor placerat pulvinar in non justo. Fusce elit sapien, rutrum vel ullamcorper et, malesuada sit amet lectus. Suspendisse rhoncus mauris ultrices purus tempus tristique. Proin tempor mollis mauris, quis dignissim sem commodo id.

            Ut vitae turpis magna. Vivamus pharetra velit eget lorem ultricies, fringilla tempus ex aliquet. Nullam tellus quam, efficitur condimentum elit hendrerit, eleifend vestibulum tortor. Nunc aliquet, enim in semper molestie, nunc leo feugiat ipsum, sed convallis velit turpis at lorem. Vestibulum et ex placerat, commodo lectus in, molestie neque. Fusce rhoncus ornare dignissim. Praesent ut dolor urna. In eleifend feugiat purus, sit amet congue nisi faucibus eget. Suspendisse vitae tortor leo. Nulla justo augue, finibus vel consequat et, semper ac dolor. Etiam malesuada justo at turpis convallis egestas. Praesent nunc est, posuere eu nulla dictum, vehicula sodales tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent suscipit ipsum vitae eros pretium, at suscipit tellus venenatis. Nunc in nisl bibendum, mattis metus a, maximus augue.

            Nulla pharetra fermentum ligula, volutpat facilisis magna porttitor ut. Vivamus non lorem egestas lectus luctus mollis in eu lorem. Sed eget libero in nibh pulvinar cursus nec hendrerit tellus. Duis lacus quam, fermentum eget elementum at, volutpat ut augue. Sed ut aliquet urna. Vestibulum gravida lacinia aliquam. Suspendisse blandit, lectus at consequat maximus, ex risus maximus nunc, dapibus auctor magna arcu vel risus. Ut et velit at tortor pharetra volutpat eu nec arcu. Vestibulum leo sapien, feugiat quis ultrices ac, molestie vitae nisi. Ut volutpat sollicitudin erat a sodales. Integer non sollicitudin orci. Vestibulum sit amet lacus mattis, sollicitudin lacus in, blandit diam.
            <StickyComponent>
              <h2>Stack this header #1</h2>
            </StickyComponent>
            Nullam eu lacinia nisl. Integer aliquam mi nibh, ac malesuada enim congue ut. Ut vulputate tellus quis erat dignissim, maximus pulvinar tellus pretium. Integer faucibus, lorem sed auctor mattis, est nulla sagittis ante, eget congue ex quam vitae tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi condimentum ultricies orci, id consequat tellus tristique egestas. Sed congue ex et laoreet accumsan. Vestibulum molestie metus quis pellentesque vestibulum. Nullam gravida elementum ipsum, in iaculis sapien eleifend ac. Vivamus vitae risus dolor. Praesent finibus velit blandit urna tincidunt suscipit. Donec porttitor lorem pharetra rhoncus rutrum. Proin velit ligula, fermentum in dui dignissim, luctus tincidunt magna. Maecenas eget libero id massa semper rutrum non et est. Curabitur scelerisque ut nunc quis efficitur.

            Aenean non volutpat ligula. Suspendisse eu mi rhoncus, luctus nibh vitae, ultrices neque. Curabitur luctus suscipit ipsum, nec vulputate leo interdum sed. Nam eget tellus ut sem tristique iaculis sit amet sed tortor. Suspendisse justo dui, mattis quis lacinia at, molestie fermentum arcu. Cras id tincidunt nibh. Curabitur leo dolor, facilisis sagittis congue non, euismod at augue. Integer sit amet cursus eros. Duis sed malesuada tortor, nec consectetur ante.

            Ut imperdiet diam id quam blandit, sit amet ultrices ex pretium. Duis luctus, sem gravida tempor faucibus, augue massa congue arcu, eu vehicula ex magna ac enim. Mauris ac enim in felis bibendum egestas eu at magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut eu tristique diam, pellentesque sagittis augue. Aliquam id elit leo. Etiam pretium ipsum eget venenatis convallis. Pellentesque non lectus eget neque pellentesque posuere.

            Donec ante sapien, pulvinar a faucibus vel, cursus eget felis. Vestibulum vestibulum libero quis justo feugiat, at porta ante ornare. Vivamus accumsan est et ex ultricies, vel posuere nulla aliquam. Nulla maximus, ante eu vulputate pulvinar, arcu nisl pharetra ipsum, ac feugiat turpis dui sit amet urna. Maecenas pharetra eu urna sed commodo. Sed eu pulvinar elit, vel consequat erat. Mauris sapien quam, fringilla et condimentum vel, elementum id purus. Nulla sed enim lorem. Duis eget faucibus diam.

            <StickyComponent>
              <h2>Stack this header #2</h2>
            </StickyComponent>

            Nullam ut elit sed risus porta cursus. Mauris libero lacus, dapibus sed nunc eu, condimentum facilisis sapien. Vivamus rhoncus a felis ut sodales. Maecenas cursus fermentum aliquet. Fusce tincidunt, lacus vitae hendrerit lobortis, arcu elit ultrices massa, bibendum consectetur nulla dolor in ipsum. Nunc urna nulla, fermentum ac est eget, ultricies interdum justo. Donec fringilla massa sit amet dictum egestas. Sed tincidunt tortor at iaculis venenatis.

            Quisque tortor urna, cursus et odio at, sodales consectetur augue. Praesent lobortis sodales risus eget varius. Phasellus bibendum scelerisque orci. Integer nec felis hendrerit, ultricies eros vel, laoreet est. Vestibulum volutpat, justo fringilla tincidunt porttitor, neque tellus tempor nibh, ac scelerisque nisl massa in odio. Vivamus nibh nunc, varius nec auctor in, finibus in justo. In posuere elementum elit, vel suscipit ipsum egestas sit amet. Vestibulum eget enim imperdiet, tincidunt tortor nec, varius ante. Pellentesque sollicitudin sem et nisi elementum viverra. Etiam vel est sem. Maecenas et venenatis diam, vel suscipit sem. Maecenas id nulla posuere, mattis eros id, facilisis orci.

            Suspendisse cursus lobortis turpis, at accumsan arcu venenatis non. Vivamus mattis leo congue ipsum faucibus faucibus. Aenean vel tristique dolor, non dapibus nunc. Duis ut elementum nibh, et euismod leo. Curabitur convallis nulla leo, in bibendum elit viverra nec. Nunc leo tellus, pulvinar ac pulvinar nec, porttitor eu nibh. Integer ultrices, justo eu cursus sagittis, velit nisi faucibus ipsum, id sodales tortor nibh eu quam. Vivamus quis purus sed nunc malesuada efficitur. Pellentesque massa dolor, viverra et enim in, finibus posuere risus. Aenean tincidunt, nisi euismod hendrerit interdum, elit magna aliquam velit, at malesuada ipsum quam et felis. Nunc tempor vestibulum consequat. Vestibulum eget augue augue. Nulla commodo pharetra erat, a ornare ligula vehicula et. Pellentesque mattis ipsum faucibus odio tincidunt, non aliquam lorem luctus. Morbi in dapibus enim, non tristique felis.

            Fusce nibh nisi, sagittis non risus a, accumsan imperdiet metus. Integer interdum maximus tristique. Donec sollicitudin porttitor lacus vel vestibulum. Morbi maximus augue at venenatis tincidunt. Ut quis diam mauris. Nam sed euismod neque. Nullam fermentum condimentum metus, quis luctus metus posuere et. Aliquam sit amet elit libero. Integer finibus, arcu vitae lacinia suscipit, mi orci congue elit, eu vulputate sapien mauris vel enim. Aliquam ornare dignissim tellus.

r          </Col>
        </Row>
      </Container>
    );
  }
}

Stack.propTypes = {};
Stack.defaultProps = {};

export default Stack;
